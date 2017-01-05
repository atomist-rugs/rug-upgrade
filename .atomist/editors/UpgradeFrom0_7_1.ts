
// Generated by Rug to TypeScript transpiler.
// To take ownership of this file, simply delete the .rug file

import {ProjectEditor} from '@atomist/rug/operations/ProjectEditor'
import {Project} from '@atomist/rug/model/Core'
import {Result,Status, Parameter} from '@atomist/rug/operations/RugOperation'

import {PathExpressionEngine} from '@atomist/rug/tree/PathExpression'

    import {File} from '@atomist/rug/model/Core'
/**
       breaking change from PR 112
*/


class UpgradeFrom0_7_1 implements ProjectEditor {

    name: string = "UpgradeFrom0_7_1"

    description: string = "breaking change from PR 112"



    edit(project: Project) {

        let eng: PathExpressionEngine = project.context().pathExpressionEngine();



            let p = project
                if (true) {
                        eng.with<File>(p, '//File()', f => {
                            if ( f.name().indexOf(".rug") > 0 ) {
                                f.replace("with file", "with File")
                                f.replace("with project", "with Project")
                                f.replace("with java.class", "with JavaType")
                                f.replace("with java.source", "with JavaSource")
                                f.replace("with pom", "with Pom")
                                f.replace("with elm.module", "with ElmModule")
                            }
                        })
                }

        return new Result(Status.Success, 'Editor [UpgradeFrom0_7_1] executed OK')
        }

}
var editor = new UpgradeFrom0_7_1();