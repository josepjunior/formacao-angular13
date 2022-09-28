import { Routes } from "@angular/router";
import { CadastrarTarefaComponent } from "./cadastrar";
import { ListarTarefasComponent } from "./listar";
import { EditarTarefaComponent } from "./editar";

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }          
];