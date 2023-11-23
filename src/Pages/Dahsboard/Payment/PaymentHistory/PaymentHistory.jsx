import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`);
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div>
            <h2> Payment history: {payments?.length}</h2>
            <div>
                <div className="overflow-x-auto lg:px-10 ">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-500 rounded-md">
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Transition Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments?.map((pay, i) => <tr key={pay._id}>
                                    <th>{i+1}</th>
                                    <th>{pay.email}</th>
                                    <td>{pay.price}</td>
                                    <td>{pay.transactionIds}</td>
                                    <td>{pay.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;