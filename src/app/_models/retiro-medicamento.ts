export class RetiroMedicamento {
    nombre: string;
    hora: string;
    fecha: string;
    lugar: string;
    paciente_rut: string;
    id_institucion: string;
    id: number;
    nombreInstitucion: string;
    dosis: string;
    institucion: {
        nombre_institucion: string;
        id: number;
    }
}