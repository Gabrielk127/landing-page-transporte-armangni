// src/types/rdstation-forms.d.ts
interface RDStationForms {
  new (id: string, type: string): {
    createForm(): void;
  };
}

declare const RDStationForms: RDStationForms;
