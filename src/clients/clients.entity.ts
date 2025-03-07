import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    id_client: number;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 255 })
    address: string;

    @Column({ length: 15 })
    phone: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    registration_date: Date;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date_received: Date;
}
