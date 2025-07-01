export interface ExtensionProps {
    name: string,
    description: string,
    logo: string,
    isActive: boolean,
    handle_delete: Function,
    handle_active: Function
}