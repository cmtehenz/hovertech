import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";
import { CreateAircraftController } from "./modules/aircrafts/controllers/CreateAircraftController";
import { ListAircraftsController } from "./modules/aircrafts/controllers/ListAircraftsController";
import { CreateUserController } from "./modules/users/controllers/CreateUserController";
import { ListUsersController } from "./modules/users/controllers/ListUsersController";
import { AuthenticateUserController } from "./modules/account/AuthenticateUserController";
import { CreateSectionController } from "./modules/section/controllers/CreateSectionController";
import { ListComponentsController } from "./modules/components/controller/ListComponentsController";


export async function appRoutes(app: FastifyInstance){
  
  const authenticateController = new AuthenticateUserController();

  const createUserController = new CreateUserController();
  const listUsersController = new ListUsersController();

  const createAircraftController = new CreateAircraftController();
  const listAircraftsController = new ListAircraftsController();

  const createSectionController = new CreateSectionController();


  const listComponentsController = new ListComponentsController();

  app.post('/auth', authenticateController.handle);

  app.post('/users', createUserController.handle);
  app.get('/users', listUsersController.handle);

  app.post('/aircraft', createAircraftController.handle);
  app.get('/aircraft', listAircraftsController.handle);

  app.post('/section', createSectionController.handle)

  app.get('/component', listComponentsController.handle);
  app.post('/component', async (request) => {
    const createComponentBody = z.object({
      description: z.string(),
      part_number: z.string(),
      serial_number: z.string(),
      date_instalation: z.coerce.date(),
      time_since_new_engine: z.number(),
      time_since_new_component: z.number(),
      time_since_overhall_component: z.number(),
      time_serial_new_now: z.number(),
      frequency: z.string(),
      type_frenquency: z.string(),
      time_serial_overhall_now: z.number(),
      sectionId: z.string()

    })
    
    const { 
      description,
      part_number,
      serial_number,
      date_instalation,
      time_since_new_engine,
      time_since_new_component,
      time_since_overhall_component,
      frequency,
      type_frenquency,
      time_serial_new_now,
      time_serial_overhall_now,
      sectionId } = createComponentBody.parse(request.body)

  const component = await prisma.component.create({
      data:{
        description,
        part_number,
        serial_number,
        date_instalation,
        time_since_new_engine,
        time_since_new_component,
        time_since_overhall_component,
        frequency,
        type_frenquency,
        time_serial_new_now,
        time_serial_overhall_now,
        created_at: new Date(),
        sectionId
      }
    })

    return component;
  })


}