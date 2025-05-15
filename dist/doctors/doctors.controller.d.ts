import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    create(createDoctorDto: CreateDoctorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDoctorDto: UpdateDoctorDto): string;
    remove(id: string): string;
}
