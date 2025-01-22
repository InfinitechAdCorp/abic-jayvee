'use client'
import React, { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

// Define validation schema using Yup
const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^\+?\d{10,12}$/, "Phone number must be between 10 and 12 digits")
        .required("Phone number is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    message: Yup.string().required("Message is required"),
});

interface Property {
    name: string;
    user_id: string;
    unit_type: string;
}

interface PropertyProps {
    data: Property;
}


const PropertyAppointment: React.FC<PropertyProps> = ({ data }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            user_id: data.user_id,
            properties: data.name,
            type: data.unit_type,
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            message: '',
            status: 'Pending',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/submit-schedule`;

                if (!endpoint) {
                    throw new Error('API URL is not defined in the environment variables');
                }
                const response = await axios.post(endpoint,
                    values,
                );

                toast.success("Inquiry submitted successfully!");
                resetForm();
                console.log(response)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    // The error is an AxiosError
                    if (error.response) {
                        toast.error(
                            error.response.data.message ||
                            "Failed to submit inquiry. Please try again later.",
                        );

                        console.log(error)
                    } else if (error.request) {
                        toast.error("No response from server. Please try again later.");
                    }
                } else {
                    toast.error("Unexpected error occurred. Please try again.");
                }
            }
            finally {
                setLoading(false);
            }
        },
    });

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex flex-col mt-6 gap-4">
                <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
                    <div className="flex gap-2">
                        <div>
                            <Input
                                label="Last Name"
                                labelPlacement="inside"
                                placeholder="eg. Pedro"
                                type="text"
                                name="last_name"
                                value={formik.values.last_name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.last_name && formik.errors.last_name && (
                                <p className="text-red-500 text-sm">{formik.errors.last_name}</p>
                            )}
                        </div>
                        <div>
                            <Input
                                label="First Name"
                                labelPlacement="inside"
                                placeholder="eg. Juan"
                                type="text"
                                name="first_name"
                                value={formik.values.first_name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}

                            />
                            {formik.touched.first_name && formik.errors.first_name && (
                                <p className="text-red-500 text-sm">{formik.errors.first_name}</p>
                            )}
                        </div>


                    </div>
                    <Input
                        label="Email"
                        labelPlacement="inside"
                        placeholder="eg. juandelacruz@gmail.com"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}

                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}

                    <Input
                        label="Phone Number"
                        labelPlacement="inside"
                        placeholder="eg. (+63 9924401097)"
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}

                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                    )}

                    <div className="flex gap-2 w-full">
                        <div className='w-full'>
                            <Input
                                label="Date"
                                labelPlacement="inside"
                                type="date"
                                name="date"
                                value={formik.values.date}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}

                            />
                            {formik.touched.date && formik.errors.date && (
                                <p className="text-red-500 text-sm">{formik.errors.date}</p>
                            )}
                        </div>

                        <div className='w-full'>
                            <Input
                                label="Time"
                                labelPlacement="inside"
                                type="time"
                                name="time"
                                value={formik.values.time}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}

                            />
                            {formik.touched.time && formik.errors.time && (
                                <p className="text-red-500 text-sm">{formik.errors.time}</p>
                            )}
                        </div>

                    </div>

                    <Textarea
                        className="w-full"
                        label="Message"
                        name="message"
                        placeholder="Leave us a message..."
                        value={formik.values.message}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-sm">{formik.errors.message}</p>
                    )}

                    <Button
                        className="bg-violet-700 text-white uppercase font-medium"
                        size="lg"
                        type="submit"
                        isLoading={loading}
                    >
                        {loading ? "Sending Inquiry..." : "Send Inquiry"}
                        <span>
                            <FaLongArrowAltRight size={16} />
                        </span>
                    </Button>
                </form>
            </div>
        </>

    );
}

export default PropertyAppointment;
