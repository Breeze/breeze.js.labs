import { config } from '../breeze-client';

declare module '../breeze-client' {
    namespace config {
        export interface PropertyDef {
            name?: string;
            nameOnServer?: string;
            isScalar?: boolean;
            validators?: Array<Validator> | Array<Object>;
        }

        export interface DataPropertyDef extends PropertyDef {
            dataType?: DataType;
            complexTypeName?: string;
            isNullable?: boolean;
            defaultValue?: any;
            isPartOfKey?: boolean;
            isUnmapped?: boolean;
            concurrencyMode?: string;
            maxLength?: number;
            custom?: Object;
        }

        export interface NavigationPropertyDef extends PropertyDef {
            entityTypeName: string;
            associationName?: string;
            foreignKeyNames?: Array<string>;
        }

        export interface TypeDef {
            shortName: string;
            namespace?: string;
            dataProperties?: Array<DataPropertyDef>;
            custom?: Object;
        }

        export interface ComplexTypeDef extends TypeDef { }

        export interface EntityTypeDef extends TypeDef {
            baseTypeName?: string;
            isAbstract?: boolean;
            autoGeneratedKeyType?: AutoGeneratedKeyType;
            defaultResourceName?: string;
            navigationProperties?: Array<NavigationPropertyDef>;
            serializerFn?: (dataProperty: DataProperty, value: any) => any;
        }

        export class MetadataHelper {
            constructor(defaultNamespace: string, defaultAutoGeneratedKeyType: AutoGeneratedKeyType);
            addDataService(store: MetadataStore, serviceName: string): void;
            addTypeNameAsResource(store: MetadataStore, type: EntityType): void;
            addTypeToStore(store: MetadataStore, typeDef: ComplexTypeDef | EntityTypeDef): ComplexType | EntityType;
            convertValidators(typeName: string, propName: string, propDef: PropertyDef): void;
            findEntityKey(typeDef: TypeDef): DataPropertyDef;
            inferDefaultResourceName(typeDef: EntityTypeDef): void;
            inferValidators(entityType: EntityTypeDef): EntityTypeDef;
            patch(typeDef: EntityTypeDef): void;
            pluralize(word: string): string;
            setDefaultAutoGeneratedKeyType(autoGeneratedKeyType: AutoGeneratedKeyType): void;
            setDefaultNamespace(namespace: string): void;
        }
    }
}