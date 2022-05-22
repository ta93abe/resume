import { Category } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';

interface ServerSideIndexProps {
    props: Category[]
}

const Stack = ({props} : ServerSideIndexProps) => {
	return (
		<div className='flex flex-col min-h-screen justify-center items-center'>
            <h1>Stacks</h1>
            {props.map(category => (
                <div key={category.id}>
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
	);
};

export default Stack;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data  = await fetch('http://localhost:3000/api/stacks').then((res) => res.json());
    const props = data;
    return { props: { props } };
}
