import { Elysia } from 'elysia';
import BaseHtml from "../components/layout/BaseHtml"


const pageRouter = new Elysia()
    .get('/', () =>
        <BaseHtml>
            <h1>Home</h1>
        </BaseHtml>
    );


export default pageRouter;