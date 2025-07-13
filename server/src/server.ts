import fastify from "fastify";
import { fastifyMultipart } from "@fastify/multipart";
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { env } from "./env.ts";
import { getRoomsRoute } from "./db/http/routes/get-rooms.ts";
import { createRoomRoute } from "./db/http/routes/create-room.ts";
import { getRoomQuestionsRoute } from "./db/http/routes/get-room-questions.ts";
import { createQuestionRoute } from "./db/http/routes/create-question.ts";
import { uploadAudioRoute } from "./db/http/routes/upload-audio.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return { status: 'ok' }
})

app.register(fastifyMultipart)

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestionsRoute)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({ port: env.PORT });