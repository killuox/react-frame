import React, { ComponentType } from 'react';

// Renderer import
import JobPostingRenderer from '../components/JobPosting/renderers/JobPostingRenderer';
import FormationRenderer from '../components/formation/renderers/FormationRenderer';
import FormationsListRenderer from '../components/formations/renderers/FormationsListRenderer';

// Base import
import JobPostingBase from '../components/JobPosting/JobPostingBase';
import FormationsBase from '../components/formations/FormationsBase';
import FormationBase from '../components/formations/FormationsBase';

// Feature import
import { withLike } from '../components/JobPosting/features/like/withLike';
import { withPopular } from '../components/formations/features/withPopular';
import { withFavorite } from '../components/JobPosting/features/favorite/withFavorite';

export class CoreComponentConfig {

    // #region Singleton pattern
    // Implement singleton pattern to make sure we have only one instance of the config
    private static instance: CoreComponentConfig;

    public static componentConfig = {} as any;

    public static getInstance(): CoreComponentConfig {
        if (!CoreComponentConfig.instance) {
            CoreComponentConfig.instance = new CoreComponentConfig();
        }
        return CoreComponentConfig.instance;
    }
    //#endregion

    // #region Variables
    public static components: string[] = ['JobPosting', 'Formation', 'Formations'];

    private static componentsFeatures = {
        JobPosting: {
            features: ['favorite', 'like', 'share'],
        },    
        Formation: {
            features: [],
        },
        Formations:{
            features: ['withPopular']
        }
    } as {
        [key: string]: {
            features: string[];
            injectedFeatures?: any[];
        };
    };
    //#endregion
    
    public constructor() {}

    public static init() {
        console.log('%cConfig successfully initialized', 'color: green');

        this.createConfigStructure();
        this.enableFeature('JobPosting', 'like');
        this.enableFeature('Formations', 'withPopular');
        
        console.log('Current configuration : ', this.componentConfig);
    }

    // #region Configs management
    
    private static createConfigStructure() {
        this.components.forEach((componentKey) => {
            this.componentConfig[componentKey] = {
                renderer: this.getRendererComponent(componentKey),
                BaseComponent: this.getBaseComponent(componentKey),
                enabledFeatures: [],
                features: this.componentsFeatures[componentKey].features || [],
            };
        });
    }

    public static getBaseComponent(coreComponentKey: string) {
        const path = coreComponentKey + 'Base';
        let BaseComponent;

        // const BaseComponent = import(/* @vite-ignore */`../components/${coreComponentKey}/${path}.tsx`);
        // const BaseComponent = React.lazy(() => import(`../components/${path}.tsx`));

        if (coreComponentKey === 'Formations') {
            BaseComponent = FormationsBase;
        } else if (coreComponentKey === 'JobPosting') {
            BaseComponent = JobPostingBase;
        } else if (coreComponentKey === 'Formation') {
            BaseComponent = FormationBase;
        }
        return BaseComponent as <T>(Component: ComponentType<T>) => any;
    }

    public static getRendererComponent(coreComponentKey: string) {
        const path = `${coreComponentKey}/renderers/${coreComponentKey}Renderer`;
        // const RendererComponent = React.lazy(() => import(/* @vite-ignore */`../components/${path}.tsx`));
        // const RendererComponent = import(`../components/${path}`);
        let RendererComponent;
        if (coreComponentKey === 'Formations') {
            RendererComponent = FormationsListRenderer;
        } else if (coreComponentKey === 'JobPosting') {
            RendererComponent = JobPostingRenderer;
        } else if (coreComponentKey === 'Formation') {
            RendererComponent = FormationRenderer;
        }
        return RendererComponent;
    }

    // Return list of all components with their configs
    static get allComponentsConfig() {
        return CoreComponentConfig.componentConfig;
    }

    // Return a component with their configs
    public getComponentConfig(coreComponentKey: string) {
        return CoreComponentConfig.componentConfig[coreComponentKey];
    }

    // Add a config to an existing component
    static addComponentConfig(coreComponentKey: string, componentConfig: any) {
        componentConfig[coreComponentKey] = componentConfig;
    }
    // #endregion

    // #region Features Management
    
    // Return an array of component with their features for a specific component
    public getEnabledFeaturesComponent(coreComponentKey: string) {
        const enabledFeatures = CoreComponentConfig.componentConfig[coreComponentKey].enabledFeatures;

        let featuresComponent: any = [];

        if(coreComponentKey === 'JobPosting') {
            featuresComponent = [withLike, withFavorite];
        }else if(coreComponentKey === 'Formations') {
            featuresComponent = [withPopular];
        }

        // TODO: Logic with dyanmic import
        // enabledFeatures.forEach((featureName: string) => {
        //     const path = featureName.toLowerCase() + '/with' + featureName;
        //     const FeatureComponent = React.lazy(() => import(`../components/${coreComponentKey}/features/${path}.tsx`));

        //     featuresComponent.push(FeatureComponent as <T>(Component: ComponentType<T>) => any);
        //     featuresComponent.push(FeatureComponent );
        // })    
        
        return featuresComponent;
    }

    // Add a feature for a specific component
    static enableFeature(coreComponentKey: string, featureName: string) {
        try {
            const component = CoreComponentConfig.componentConfig[coreComponentKey];
            const availableFeatures = this.componentConfig[coreComponentKey].features;

            if (availableFeatures.includes(featureName)) {
                component.enabledFeatures.push(featureName);
                console.log(`%cFeature { ${featureName} } enabled for ${coreComponentKey}`, 'color: yellow');
            } else {
                console.error(
                    `Feature: ${featureName}, is not available for component ${coreComponentKey}`,
                );
            }
        } catch (e) {
            console.error(e);
        }
    }

    static disableFeature(coreComponentKey: string, featureName: string) {
        try {
            const component = CoreComponentConfig.componentConfig[coreComponentKey];
            const availableFeatures = this.componentConfig[coreComponentKey].features;

            if (availableFeatures.includes(featureName)) {
                component.enabledFeatures = component.enabledFeatures.filter(
                    (feature: string) => feature !== featureName,
                );
            } else {
                console.error(
                    `Feature: ${featureName}, is not available for component ${coreComponentKey}`,
                );
            }
        } catch (e) {
            console.error(e);
        }
    }

    public getEnabledFeatures(coreComponentKey: string) {
        return CoreComponentConfig.componentConfig[coreComponentKey].enabledFeatures;
    }

    //#endregion
}

export default new CoreComponentConfig();
