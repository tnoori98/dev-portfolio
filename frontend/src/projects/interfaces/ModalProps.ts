import type { Project } from "./Project";

export interface ModalProps {
    project: Project;
    closeModal: () => void;
}