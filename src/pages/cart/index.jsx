import { Button, Image, Table, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll } from '../../redux/features/cartSlice';
import { toast } from 'react-toastify';
import api from '../../config/axios';
import './index.scss';

function CartPage() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const data = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleBuy = async () => {
        setIsLoading(true);
        try {
            const selectedItems = data.filter((koi) => selectedRowKeys.includes(koi.id));
            const detail = selectedItems.map((koi) => ({
                koiId: koi.id,
                quantity: koi.quantity,
            }));
            const response = await api.post('order', { detail });
            dispatch(clearAll());
            window.open(response.data.content);
            toast.success('Order created successfully');
        } catch (err) {
            toast.error('Failed to create order');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearAll = () => {
        Modal.confirm({
            title: 'Are you sure you want to clear the cart?',
            onOk: () => dispatch(clearAll()),
        });
    };

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image) => <Image src={image} width={200} />,
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Species',
            dataIndex: 'species',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
    ];

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Your Cart</h1>
                <Button className="clear-all-btn" onClick={handleClearAll}>Clear all</Button>
            </div>
            <Table
                rowKey={'id'}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                className="cart-table"
            />
            <Button
                className="buy-btn"
                onClick={handleBuy}
                disabled={selectedRowKeys.length === 0 || isLoading}
                loading={isLoading}
            >
                Buy
            </Button>
        </div>
    );
}

export default CartPage;
