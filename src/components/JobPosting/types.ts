import type * as Stitches from '@stitches/react';

// Place all features here that you want to disable by props
export type JobPostingDisableFeaturesType = {
    disableFavorite?: boolean;
};

// Place props that you pass to the component here
export type JobPostingPropsType = {
    title: string;
    css?: Stitches.CSS;
    description: string;
    company?: string;
    onCompanyClick?: () => void;
    renderer?: React.FC<any>;
} & JobPostingDisableFeaturesType;

// Base component props
export type JobPostingBaseType = {
    onDetailsClick?: () => void;
    viewCount?: number;
}

// Favorite component props
export type JobPostingFavoriteType = JobPostingPropsType & {
    favoriteDom: JSX.Element;
}

// Like component props
export type JobPostingLikeType = JobPostingPropsType & {
    isLiked: boolean;
}

// Render props (Place all props type that you pass to the renderer here)
export type JobPostingRenderType = JobPostingPropsType & JobPostingBaseType  & JobPostingLikeType & JobPostingFavoriteType;
