import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ApiService } from '../shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LibroModelo } from './libroModelo';


@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
  
})
export class DetallesProductoComponent implements OnInit{

  mostrarAgg!: boolean; 
  mostrarAct!: boolean;
  libroModelObj : LibroModelo = new LibroModelo();
  libroData!: any; 
  libroG !: FormGroup;
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'edicion', 'estado', 'notas_adicionales','acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(private formbuilder:FormBuilder, private dialog:MatDialog, 
  private api:ApiService) { 
   
}

  ngOnInit(): void {
    
    this.libroG = this.formbuilder.group({
      id : [''],
      nombre : [''],
      precio : [''],
      edicion : [''],
      estado : [''],
      notas_adicionales: [''],
    })
    this.getAllLibros();
  }

  clickAggLibro(){
    this.libroG.reset();
    this.mostrarAgg =true;
    this.mostrarAct = false; 
  }

  postLibroD(){
    this.libroModelObj.id = this.libroG.value.id;
    this.libroModelObj.nombre = this.libroG.value.nombre;
    this.libroModelObj.precio = this.libroG.value.precio
    this.libroModelObj.edicion = this.libroG.value.edicion;
    this.libroModelObj.estado = this.libroG.value.estado;
    this.libroModelObj.notas_adicionales = this.libroG.value.notas_adicionales;

    this.api.postLibro(this.libroModelObj)
    .subscribe(
      {
        next: res=>{console.log(res); alert("Libro agregado exitosamente")
      let ref = document.getElementById('cancel')
        ref?.click();
        this.libroG.reset();
        this.getAllLibros(); 
      }, 
        error: err=>{alert("Error");}
       
      })
      
  }

   getAllLibros(){
    this.api.getLibro().subscribe(res=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    })
  } 

  eliminarLibro(row : any){
    this.api.eliminarLibro(row.id)
    .subscribe(
      res=>{alert("Libro eliminado");
      this.getAllLibros();
    })
  }
  
  editar(row: any){
    this.mostrarAgg =false;
    this.mostrarAct = true;
    this.libroModelObj.id = row.id;
    this.libroG.controls['id'].setValue(row.id);
    this.libroG.controls['nombre'].setValue(row.nombre);
    this.libroG.controls['precio'].setValue(row.precio);
    this.libroG.controls['edicion'].setValue(row.edicion);
    this.libroG.controls['estado'].setValue(row.estado);
    this.libroG.controls['notas_adicionales'].setValue(row.notas_adicionales);
  }

  actualizarPostLibroD(){
    this.libroModelObj.id = this.libroG.value.id;
    this.libroModelObj.nombre = this.libroG.value.nombre;
    this.libroModelObj.precio = this.libroG.value.precio;
    this.libroModelObj.edicion = this.libroG.value.edicion;
    this.libroModelObj.estado = this.libroG.value.estado;
    this.libroModelObj.notas_adicionales = this.libroG.value.notas_adicionales;
this.api.guardarLibro(this.libroModelObj,this.libroModelObj.id)
    .subscribe(res=>{
      alert("Actualizado exitosamente");
      let ref = document.getElementById('cancel')
        ref?.click();
        this.libroG.reset();
        this.getAllLibros();
    })
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
  }
}
}
