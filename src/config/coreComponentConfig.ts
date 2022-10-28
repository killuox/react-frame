import React, { ComponentType } from 'react';
import { componentFeatures } from './component';

import JobPostingRenderer from '../components/JobPosting/renderers/JobPostingRenderer';
import FormationRenderer from '../components/formation/renderers/FormationRenderer';
import FormationsListRenderer from '../components/formations/renderers/FormationsListRenderer';
import JobPostingBase from '../components/JobPosting/JobPostingBase';
import FormationsBase from '../components/formations/FormationsBase';

export class CoreComponentConfig {
    public static components: string[] = ['JobPosting', 'Formation', 'Formations'];

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

    public constructor() {}

    // TODO: Lazy import for all components renderer
    // TODO: Implements config for all components and use them in the app
    // TODO: Replace this.configs

    public static init() {
        console.log('%cConfig successfully initialized', 'color: green');

        this.createConfigStructure();
        // JobPosting
        this.enableFeature('JobPosting', 'favorite');
        // FormationsList

        console.log('Test: ', this.componentConfig);
    }

    private static createConfigStructure() {
        this.components.forEach((componentKey) => {
            this.componentConfig[componentKey] = {
                renderer: this.getRendererComponent(componentKey),
                BaseComponent: this.getBaseComponent(componentKey),
                enabledFeatures: [],
                features: componentFeatures[componentKey].features || [],
                injectedFeatures: componentFeatures[componentKey].injectedFeatures || [],
            };
        });
    }

    // #region Configs management

    public static getBaseComponent(coreComponentKey: string) {
        const path = coreComponentKey + 'Base';
        let BaseComponent;

        // const BaseComponent = import(/* @vite-ignore */`../components/${coreComponentKey}/${path}.tsx`);
        // const BaseComponent = React.lazy(() => import(`../components/${path}.tsx`));

        if (coreComponentKey === 'Formations') {
            BaseComponent = FormationsBase;
        } else if (coreComponentKey === 'JobPosting') {
            BaseComponent = JobPostingBase;
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
    public getComponentConfig(componentName: string) {
        return CoreComponentConfig.componentConfig[componentName];
    }

    // Add a config to an existing component
    static addComponentConfig(componentName: string, componentConfig: any) {
        componentConfig[componentName] = componentConfig;
    }
    // #endregion

    // #region Features Management

    // Turn on/off feature for a component
    // static toggleFeature(componentName: string, featureName: string, enabled: boolean) {
    //     try{
    //         const component = componentConfig[componentName];
    //         const feature = component.features.find((feature: any) => feature.name === featureName);
    //         if (feature) {
    //             feature.enabled = enabled;
    //         }
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    // // Edit feature name
    // static editFeatureName(componentName: string, featureName: string) {
    //     try{
    //         const component = componentConfig[componentName];
    //         const feature = component.features.find((feature: any) => feature.name === featureName);
    //         if (feature) {
    //             feature.name = featureName;
    //         }
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    // Add a feature for a specific component
    static enableFeature(componentName: string, featureName: string) {
        try {
            const component = CoreComponentConfig.componentConfig[componentName];
            const availableFeatures = this.componentConfig[componentName].features;

            if (availableFeatures.includes(featureName)) {
                component.enabledFeatures.push(featureName);
            } else {
                console.error(
                    `Feature: ${featureName}, is not available for component ${componentName}`,
                );
            }
        } catch (e) {
            console.error(e);
        }
    }

    static disableFeature(componentName: string, featureName: string) {
        try {
            const component = CoreComponentConfig.componentConfig[componentName];
            const availableFeatures = this.componentConfig[componentName].features;

            if (availableFeatures.includes(featureName)) {
                component.enabledFeatures = component.enabledFeatures.filter(
                    (feature: string) => feature !== featureName,
                );
            } else {
                console.error(
                    `Feature: ${featureName}, is not available for component ${componentName}`,
                );
            }
        } catch (e) {
            console.error(e);
        }
    }

    public getInjectedFeatures(componentName: string) {
        return CoreComponentConfig.componentConfig[componentName].injectedFeatures;
    }

    public getEnabledFeatures(componentName: string) {
        return CoreComponentConfig.componentConfig[componentName].enabledFeatures;
    }

    // Remove a feature for a specific component
    // static removeFeature(componentName: string, featureName: string) {
    //     try{
    //         const component = componentConfig[componentName];
    //         const feature = component.features.find((feature: any) => feature.name === featureName);
    //         if (feature) {
    //             component.features.splice(component.features.indexOf(feature), 1);
    //         }
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    // static disableAllFeatures(componentName: string) {
    //     try{
    //         const component = componentConfig[componentName];
    //         component.features.forEach((feature: any) => feature.enabled = false);
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    // static enableAllFeatures(componentName: string) {
    //     try{
    //         const component = componentConfig[componentName];
    //         component.features.forEach((feature: any) => feature.enabled = false);
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    // // Remove all features for a specific component
    // static removeAllFeatures(componentName: string) {
    //     try{
    //         const component = componentConfig[componentName];
    //         component.features = [];
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    // // Return all features for a specific component
    // static getFeatures(componentName: string) {
    //     try{
    //         const component = componentConfig[componentName];
    //         return component.features;
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    // static getActiveFeatures(componentName: string) {
    //     try{
    //         const component = componentConfig[componentName];
    //         return component.features.filter((feature: any) => feature.enabled);
    //     }catch(e){
    //         console.error(e);
    //     }
    // }

    //#endregion
}

export default new CoreComponentConfig();
