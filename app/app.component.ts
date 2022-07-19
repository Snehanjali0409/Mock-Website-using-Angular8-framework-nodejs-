import { Component,Input, OnInit, Output,EventEmitter,ViewChild} from '@angular/core';
import {PostService } from './services/post.service';
import {HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableDataSource } from '@angular/material/table';
import students  from './assets/data/studentsData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
      title = 'MyProject';
      items:any=[];
      firstName:any;
      addtag:any;

      counter(i:number){
      return new Array(i);}
     isCollapsed : boolean[]=[];
       
  
    constructor(private service: PostService){}
   toggleCollapse(i){
					this.isCollapsed[i]=!this.isCollapsed[i];
				  }
				    
				  myButton() {
				    console.log("my button was clicked!");
				  }
				  ngOnInit(){
				     this.service.getPosts().subscribe(response=>{
				     this.items=response;
				     for(var i=0;i<=25;i++){
				    this.isCollapsed[i]=true;
				    }
				   
				  })
				  
				   }
				     
				   
				   
				  Search(){
				     
				       if(this.firstName==""){
				          this.ngOnInit();
				       }else{
				                
				                this.items.students=this.items.students.filter(res=>{
				                return res.firstName?.toLocaleLowerCase().match(this.firstName?.toLocaleLowerCase());
				                 });
				   }
				}
				}
				
				
				
				
				
