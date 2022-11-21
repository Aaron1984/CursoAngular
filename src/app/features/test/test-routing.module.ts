import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/_helpers/auth.guard";
import { Test1Component } from "./pages/test1/test1.component";
import { Test2Component } from "./pages/test2/test2.component";

const routes: Routes = [
  { path: '1', component: Test1Component, canActivate: [AuthGuard] },
  { path: '2', component: Test2Component, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: '1'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
