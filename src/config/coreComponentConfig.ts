import { componentConfig } from './component';

import JobPostingRenderer from '../components/JobPosting/renderers/JobPostingRenderer';
import FormationRenderer from '../components/formation/renderers/FormationRenderer';
import FormationsListRenderer from '../components/formations/renderers/FormationsListRenderer';

export class CoreComponentConfig {

    public constructor(){}

    
    public static init(){
        console.log("%cConfig successfully initialized", 'color: green');

        this.addFeature('Formations', 'withPopular', true);
        console.log(this.allComponentsConfig)

        this.createConfigStructure();
        console.log(this.testConfig)
    }

    // TODO: Lazy import for all components renderer
    // TODO: Implements config for all components and use them in the app
    // TODO: Replace this.configs

    private static createConfigStructure(){
        this.components.forEach(componentName => {
            this.testConfig.push(
                {
                    [componentName]: {
                        renderer: this.getBaseComponent(componentName),
                        features: [],
                    }
                }
            )
        });
    }

    public static testConfig: any[] = [];
    
    public static components: string [] = [
        'JobPosting',
        'Formation',
        'Formations'
    ];
    
    public static configs = {
        JobPosting: {
            renderer: JobPostingRenderer,
            features: [
                {
                    name: 'favorite',
                    enabled: true,
                },
                {
                    name: 'like',
                    enabled: true,
                },
            ],
        },
        Formation: {
            renderer: FormationRenderer,
            features: [
    
            ],
        },
        Formations:{
            renderer: FormationsListRenderer,
            features: [
    
            ]
        }
    } as {
        [key: string]: {
            renderer: React.FC<any>;
            features: {
                name: string;
                enabled: boolean;
            }[];
        };
    };

    // Implement singleton pattern to make sure we have only one instance of the config
    private static instance: CoreComponentConfig;

    public static getInstance(): CoreComponentConfig {
        if (!CoreComponentConfig.instance) {
            CoreComponentConfig.instance = new CoreComponentConfig();
        }
        return CoreComponentConfig.instance;
    }

    // #region Configs management

    static getBaseComponent(coreComponentKey: string) {
        try{
            const component = componentConfig[coreComponentKey];
            return component.renderer;
        }catch(e){
            console.error(e);
        }
    }

    // Return list of all components with their configs
    static get allComponentsConfig(){
        return componentConfig;
    }

    // Return a component with their configs
    static getSingleComponentConfig(componentName: string){
        return componentConfig[componentName];
    }

    // Add a config to an existing component
    static addComponentConfig(componentName: string, componentConfig: any) {
        componentConfig[componentName] = componentConfig;
    }
    // #endregion

    // #region Features Management

    // Turn on/off feature for a component
    static toggleFeature(componentName: string, featureName: string, enabled: boolean) {
        try{
            const component = componentConfig[componentName];
            const feature = component.features.find((feature: any) => feature.name === featureName);
            if (feature) {
                feature.enabled = enabled;
            }
        }catch(e){
            console.error(e);
        }
    }

    // Edit feature name
    static editFeatureName(componentName: string, featureName: string) {
        try{
            const component = componentConfig[componentName];
            const feature = component.features.find((feature: any) => feature.name === featureName);
            if (feature) {
                feature.name = featureName;
            }
        }catch(e){
            console.error(e);
        }
    }

    // Add a feature for a specific component
    static addFeature(componentName: string, featureName: string, enabled: boolean) {
        try{
            const component = componentConfig[componentName];
            component.features.push({
                name: featureName,
                enabled: enabled
            });
        }catch(e){
            console.error(e);
        }
    }

    // Remove a feature for a specific component
    static removeFeature(componentName: string, featureName: string) {
        try{
            const component = componentConfig[componentName];
            const feature = component.features.find((feature: any) => feature.name === featureName);
            if (feature) {
                component.features.splice(component.features.indexOf(feature), 1);
            }
        }catch(e){
            console.error(e);
        }
    }

    static disableAllFeatures(componentName: string) {
        try{
            const component = componentConfig[componentName];
            component.features.forEach((feature: any) => feature.enabled = false);
        }catch(e){
            console.error(e);
        }
    }

    static enableAllFeatures(componentName: string) {
        try{
            const component = componentConfig[componentName];
            component.features.forEach((feature: any) => feature.enabled = false);
        }catch(e){
            console.error(e);
        }
    }

    // Remove all features for a specific component
    static removeAllFeatures(componentName: string) {
        try{
            const component = componentConfig[componentName];
            component.features = [];
        }catch(e){
            console.error(e);
        }
    }

    // Return all features for a specific component
    static getFeatures(componentName: string) {
        try{
            const component = componentConfig[componentName];
            return component.features;
        }catch(e){
            console.error(e);
        }
    }

    static getActiveFeatures(componentName: string) {
        try{
            const component = componentConfig[componentName];
            return component.features.filter((feature: any) => feature.enabled);
        }catch(e){
            console.error(e);
        }
    }

    //#endregion
}

export default new CoreComponentConfig();