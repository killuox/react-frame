import JobPostingBase from "./JobPostingBase";
import JobPostingRenderer from "./renderers/JobPostingRenderer";
import { withFavorite } from "./features/favorite/withFavorite";
import { withLike } from "./features/like/withLike";

let jobPostingComponents = {} as any;

// Base
jobPostingComponents['base'] = JobPostingBase;

// Renderer
jobPostingComponents['renderer'] = JobPostingRenderer;

// Features
jobPostingComponents['features'] = {};
jobPostingComponents['features']['favorite'] = withFavorite;
jobPostingComponents['features']['like'] = withLike;

export default jobPostingComponents;