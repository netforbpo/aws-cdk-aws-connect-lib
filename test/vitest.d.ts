export {};

interface AnnotationsMatchers<R = unknown> {
    hasError: (constructPath: string, message: any ) => void;
}

interface TemplateMatchers<R = unknown> {
    hasResource: (resource_type: string, props?: any) => void;
    hasResourceProperties: (resource_type: string, props?: any) => void;
    hasParameter: (logical_id: string, props?: any) => void;
    hasResourceCount: (resource_type, count) => void;
}

declare module 'vitest' {
    interface Assertion<T = any> extends TemplateMatchers<T> {}
    interface Assertion<T = any> extends AnnotationsMatchers<T> {}
}
