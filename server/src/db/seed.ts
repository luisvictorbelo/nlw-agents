import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'
import { rooms } from './schema/rooms.ts'
import { questions } from './schema/questions.ts'

await reset(db, schema)

await seed(db, schema).refine(f => {
    return {
        rooms: {
            count: 5,
            columns: {
                name: f.companyName(),
                description: f.loremIpsum(),
            },
        },
        questions: {
            count: 20
        }
    }
})

await sql.end()

console.log('Database seeded')
