// /**
// https://github.com/jmcdo29/testing-nestjs/blob/main/apps/mongo-sample/src/cat/cat.service.spec.ts#L64
// */

// import { Test, TestingModule } from '@nestjs/testing'
// import { CentredService } from './centred.service'
// import { getModelToken } from '@nestjs/mongoose'
// import { IReadCentred } from './interfaces/readCentred.interface'
// import { createMock } from '@golevelup/ts-jest'
// import { Model, Query, Schema } from 'mongoose'
// import { CentredDocument } from '../../../infrastructure/database/centred/schemas/centred.schema'

// // I'm lazy and like to have functions that can be re-used to deal with a lot of my initialization/creation logic
// const mockCentred = (
//   _id = new Schema.Types.ObjectId('5f8d0cbbf5f3f03c1c9d9d4c'),
//   tenancyName = 'Zentre',
//   officialName = 'Zentre',
//   country = 'Peru',
//   type = 'Consultant',
//   favicon = 'Favicon.com',
//   currencyName = 'EUR',
//   apps = [],
//   updatedAt = new Date(),
//   createdAt = new Date(),
// ): IReadCentred => ({
//   _id,
//   tenancyName,
//   officialName,
//   country,
//   type,
//   favicon,
//   currencyName,
//   apps,
//   updatedAt,
//   createdAt,
// })

// // still lazy, but this time using an object instead of multiple parameters
// const mockCentredDoc = (mock?: Partial<IReadCentred>): Partial<CentredDocument> => ({
//   _id: mock?._id,
//   tenancyName: mock?.tenancyName || 'Zentre',
//   officialName: mock?.officialName || 'Zentre',
//   country: mock?.country || 'Peru',
//   type: mock?.type || 'Consultant',
//   favicon: mock?.favicon || 'Favicon.com',
//   currencyName: mock?.currencyName || 'EUR',
//   apps: mock?.apps || [],
//   updatedAt: mock?.updatedAt || new Date(),
//   createdAt: mock?.createdAt || new Date(),
// })

// const centredArray = [
//   mockCentred(),
//   mockCentred(
//     new Schema.Types.ObjectId('5f8d0cbbf5f3f03c1c9d9d4c'),
//     'Zentre',
//     'Zentre',
//     'Peru',
//     'Consultant',
//     'Favicon.com',
//     'EUR',
//     [],
//     new Date(),
//     new Date(),
//   ),
//   mockCentred(
//     new Schema.Types.ObjectId('5f8d0cbbf5f3f03c1c9d9d4d'),
//     'Zentre2',
//     'Zentre3',
//     'Peru',
//     'School',
//     'Favicon.com',
//     'EUR',
//     [],
//     new Date(),
//     new Date(),
//   ),
// ]

// const centredDocArray: Partial<CentredDocument>[] = [
//   mockCentredDoc(),
//   mockCentredDoc({
//     _id: new Schema.Types.ObjectId('5f8d0cbbf5f3f03c1c9d9d4c'),
//     tenancyName: 'Zentre',
//     officialName: 'Zentre',
//     country: 'Peru',
//     type: 'Consultant',
//     favicon: 'Favicon.com',
//     currencyName: 'EUR',
//     apps: [],
//     updatedAt: new Date(),
//     createdAt: new Date(),
//   }),
//   mockCentredDoc({
//     _id: new Schema.Types.ObjectId('5f8d0cbbf5f3f03c1c9d9d4d'),
//     tenancyName: 'Zentre2',
//     officialName: 'Zentre3',
//     type: 'School',
//     favicon: 'Favicon.com',
//     currencyName: 'EUR',
//     apps: [],
//     updatedAt: new Date(),
//     createdAt: new Date(),
//   }),
// ]

// describe('CentredService', () => {
//   let service: CentredService
//   let model: Model<CentredDocument>

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         // CentredService,
//         {
//           provide: getModelToken('CentredSchema'),
//           // notice that only the functions we call from the model are mocked
//           useValue: {
//             new: jest.fn().mockResolvedValue(mockCentred()),
//             constructor: jest.fn().mockResolvedValue(mockCentred()),
//             find: jest.fn(),
//             findOne: jest.fn(),
//             update: jest.fn(),
//             create: jest.fn(),
//             remove: jest.fn(),
//             exec: jest.fn(),
//           },
//         },
//         CentredService,
//       ],
//     }).compile()

//     service = module.get<CentredService>(CentredService)
//     model = module.get<Model<CentredDocument>>(getModelToken('CentredSchema'))
//   })

//   it('should be defined', () => {
//     expect(service).toBeDefined()
//   })

//   afterEach(() => {
//     jest.clearAllMocks()
//   })

//   // In all the spy methods/mock methods we need to make sure to
//   // add in the property function exec and tell it what to return
//   // this way all of our mongo functions can and will be called
//   // properly allowing for us to successfully test them.
//   // it('should return all cats', async () => {
//   //   jest.spyOn(model, 'find').mockReturnValue({
//   //     exec: jest.fn().mockResolvedValueOnce(centredDocArray),
//   //   } as unknown as Query<CentredDocument[], CentredDocument>)
//   //   const cats = await service.getAll()
//   //   expect(cats).toEqual(centredArray)
//   // })
//   it('should getOne by id', async () => {
//     jest.spyOn(model, 'findOne').mockReturnValueOnce(
//       createMock<Query<CentredDocument, CentredDocument>>({
//         exec: jest.fn().mockResolvedValueOnce(mockCentredDoc(centredDocArray[1])),
//       }),
//     )
//     const findMockCentred = mockCentred(
//       new Schema.Types.ObjectId('5f8d0cbbf5f3f03c1c9d9d4c'),
//       'Zentre',
//       'Zentre',
//       'Peru',
//       'Consultant',
//       'Favicon.com',
//       'EUR',
//       [],
//       new Date(),
//       new Date(),
//     )
//     const foundCentred = await service.getCentred('5f8d0cbbf5f3f03c1c9d9d4c')
//     expect(foundCentred).toEqual(findMockCentred)
//   })
//   // it('should getOne by name', async () => {
//   //   jest.spyOn(model, 'findOne').mockReturnValueOnce(
//   //     createMock<Query<CentredDocument, CentredDocument>>({
//   //       exec: jest
//   //         .fn()
//   //         .mockResolvedValueOnce(mockCentredDoc({ name: 'Mufasa', id: 'the dead king' })),
//   //     }),
//   //   )
//   //   const findMockCat = mockCentred('Mufasa', 'the dead king')
//   //   const foundCat = await service.getOneByName('Mufasa')
//   //   expect(foundCat).toEqual(findMockCat)
//   // })
//   // it('should insert a new cat', async () => {
//   //   jest.spyOn(model, 'create').mockImplementationOnce(() =>
//   //     Promise.resolve({
//   //       _id: 'some id',
//   //       name: 'Oliver',
//   //       age: 1,
//   //       breed: 'Tabby',
//   //     }),
//   //   )
//   //   const newCat = await service.insertOne({
//   //     name: 'Oliver',
//   //     age: 1,
//   //     breed: 'Tabby',
//   //   })
//   //   expect(newCat).toEqual(mockCentred('Oliver', 'some id', 1, 'Tabby'))
//   // })
//   // // jest is complaining about findOneAndUpdate. Can't say why at the moment.
//   // it.skip('should update a cat successfully', async () => {
//   //   jest.spyOn(model, 'findOneAndUpdate').mockReturnValueOnce(
//   //     createMock<Query<CentredDocument, CentredDocument>>({
//   //       exec: jest.fn().mockResolvedValueOnce({
//   //         _id: lasagna,
//   //         name: 'Garfield',
//   //         breed: 'Tabby',
//   //         age: 42,
//   //       }),
//   //     }),
//   //   )
//   //   const updatedCat = await service.updateOne({
//   //     _id: lasagna,
//   //     name: 'Garfield',
//   //     breed: 'Tabby',
//   //     age: 42,
//   //   })
//   //   expect(updatedCat).toEqual(mockCentred('Garfield', lasagna, 42, 'Tabby'))
//   // })
//   // it('should delete a cat successfully', async () => {
//   //   // really just returning a truthy value here as we aren't doing any logic with the return
//   //   jest.spyOn(model, 'remove').mockResolvedValueOnce(true as any)
//   //   expect(await service.deleteOne('a bad id')).toEqual({ deleted: true })
//   // })
//   // it('should not delete a cat', async () => {
//   //   // really just returning a falsy value here as we aren't doing any logic with the return
//   //   jest.spyOn(model, 'remove').mockRejectedValueOnce(new Error('Bad delete'))
//   //   expect(await service.deleteOne('a bad id')).toEqual({
//   //     deleted: false,
//   //     message: 'Bad delete',
//   //   })
//   // })
// })
