import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Mechanic {
    @PrimaryGeneratedColumn()
    id_mechanic: number;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 100 })
    specialty: string;

    @Column({ length: 15 })
    phone: string;

    @Column({ length: 255, unique: true })
    email: string;
}
