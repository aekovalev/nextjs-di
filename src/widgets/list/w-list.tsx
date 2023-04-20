import { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { app } from '@/app';

const WList = observer(() => {
    const todos = app.storeBusiness.global.todos;

    return (
        <div>
            {todos.map((todo: any, idx: number) =>
                <Fragment key={idx}>
                    <div>
                        <div>Id: {todo.id}</div>
                        <div>Userid: {todo.userId}</div>
                        <div>Title: {todo.title}</div>
                        <div>Completed: {todo.completed.toString()}</div>
                    </div>
                    <hr />
                    <br />
                </Fragment>
            )}
        </div>
    )
})

export default WList;
