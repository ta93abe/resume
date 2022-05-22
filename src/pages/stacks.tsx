import { GetServerSideProps, NextPage } from 'next';
import prisma, { Category } from "../lib/prisma";

type Props = {
    categories: Pick<Category, 'id' | 'name'>[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const categories = await prisma.category.findMany({
        select: {
            id: true,
            name: true,
            description: true,
        }
    });
    return { props: { categories, } };
}


interface ServerSideIndexProps {
    props: Category[]
}

export default function Stack(props: Props) {
	return (
		<div className='flex flex-col min-h-screen justify-center items-center'>
            <h1>Stacks</h1>
            {props.categories.map(category => (
                <div key={category.id}>
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
	);
};
