// Generated by Rug to TypeScript transpiler.

import { EditProject } from '@atomist/rug/operations/ProjectEditor'
import { PathExpressionEngine } from '@atomist/rug/tree/PathExpression'
import { Editor, Tags, Parameter } from '@atomist/rug/operations/Decorators'
import { Pattern } from '@atomist/rug/operations/RugOperation'
import { Project, RugArchiveProject } from '@atomist/rug/model/Core'

/**
    ConvertRugToTypeScript
    ConvertRugToTypeScript
 */

@Editor("ConvertRugToTypeScript", "ConvertRugToTypeScript")
class ConvertRugToTypeScript implements EditProject {

    @Parameter({
        pattern: "^.*$"
    })
    rug_name: string;

    edit(project: Project) {

        let eng: PathExpressionEngine = project.context().pathExpressionEngine();

        eng.with<RugArchiveProject>(project, '//RugArchiveProject()', p => {
            console.log("The rug name is " + this.rug_name) 
            eng.with<any>(p, '//Editor()', r => {
                if (r.name() == this.rug_name) {
                    console.log("Changing rug " + r.name() ) 
                    r.convertToTypeScript()
                }
            })
        })

    }

}
export let editor_convertRugToTypeScript = new ConvertRugToTypeScript();