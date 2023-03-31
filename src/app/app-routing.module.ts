import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LonuevoComponent } from './components/lonuevo/lonuevo.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  {path: '', redirectTo : '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'artistas', component:ArtistasComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'footer', component:FooterComponent},
  {path:'lonuevo', component:LonuevoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
