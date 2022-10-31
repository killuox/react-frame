import FormationsBase from "./FormationsBase";
import FormationRenderer from "../formation/renderers/FormationRenderer";
import { withPopular } from "./features/withPopular";

let formationsComponents = {} as any;

// Base
formationsComponents['base'] = FormationsBase;

// Renderer
formationsComponents['renderer'] = FormationRenderer;

// Features
formationsComponents['features'] = {};
formationsComponents['features']['popular'] = withPopular;

export default formationsComponents;
