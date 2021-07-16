import { Routes } from "@angular/router"
import { DeveloperComponentComponent } from "./developer-component/developer-component.component"
import { SkillComponentComponent } from "./skill-component/skill-component.component"

const ROUTES : Routes = [
    {
        path: "developer", component: DeveloperComponentComponent
    },
    {
        path : "skill", component: SkillComponentComponent
    }
]

export { ROUTES}
