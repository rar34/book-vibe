import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types'
import { getStoredBook } from '../../utility/localStorageRead';
import { useEffect, useState } from 'react';
import useBooksData from '../Hooks/useBooksData';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};


const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {
    const {books} = useBooksData();
    const [bookList, setBookList] = useState([]);
    console.log(bookList)

    useEffect(() => {
        const storedBooks = getStoredBook();
        if (books.length > 0) {
            const storedBook = [];
            for (const id of storedBooks) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    storedBook.push(book);
                }
            }

            setBookList(storedBook);

        }
    }, [books?.length]);

    return (
        <div className='flex justify-center mt-14'>
            <BarChart
                width={1200}
                height={500}
                data={bookList}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookList?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

TriangleBar.propTypes ={
    fill: PropTypes.any,
    x: PropTypes.any,
    y: PropTypes.any,
    width: PropTypes.any,
    height: PropTypes.any
}

export default PagesToRead;