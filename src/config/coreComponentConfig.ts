import components from './components';

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

    public constructor() {}

    public static init() {
        console.log('%cConfig successfully initialized', 'color: green');
        this.createConfigStructure();
        this.enableFeatures('JobPosting', ['favorite']);
        this.enableFeatures('Formations', ['popular']);
    }

    // #region Configs management

    private static createConfigStructure() {
        Object.keys(components).forEach((componentKey) => {
            this.componentConfig[componentKey] = {
                renderer: this.getRendererComponent(componentKey),
                BaseComponent: this.getBaseComponent(componentKey),
                enabledFeatures: [],
                features: Object.keys(components[componentKey].features),
            };
        });
    }

    public static getBaseComponent(coreComponentKey: string) {
        return components[coreComponentKey].base;
    }

    public static getRendererComponent(coreComponentKey: string) {
        return components[coreComponentKey].renderer;
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
        const enabledFeatures = this.getEnabledFeatures(coreComponentKey);

        // Get features components
        const featuresComponent = enabledFeatures.map((feature: any) => {
            return components[coreComponentKey].features[feature];
        });
        
        return featuresComponent;
    }

    // Add features for a specific component
    static enableFeatures(coreComponentKey: string, featureName: string[]) {
        try {
            const component = CoreComponentConfig.componentConfig[coreComponentKey];
            const availableFeatures = this.componentConfig[coreComponentKey].features;

            featureName.forEach((feature: string) => {
                if (availableFeatures.includes(feature)) {
                    component.enabledFeatures.push(feature);
                } else {
                    console.error(
                        `Feature: ${feature}, does not exist for component: ${coreComponentKey}`
                    );
                }
            });
        } catch (e) {
            console.error(e);
        }
    }

    // Disable features for a specific component
    static disableFeatures(coreComponentKey: string, featureName: string[]) {
        try {
            const component = CoreComponentConfig.componentConfig[coreComponentKey];
            const availableFeatures = this.componentConfig[coreComponentKey].features;

            featureName.forEach((feature: string) => {
                if (availableFeatures.includes(feature)) {
                    component.enabledFeatures = component.enabledFeatures.filter(
                        (enabledFeature: string) => enabledFeature !== feature,
                    );
                } else {
                    console.error(
                        `Feature: ${featureName}, does not exist for component: ${coreComponentKey}`
                    );
                }
            });
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
