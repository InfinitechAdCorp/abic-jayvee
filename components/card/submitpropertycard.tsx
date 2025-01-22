"use client";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import { FaArrowRightLong, FaLeaf } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const agents = [
  { key: "Owner", label: "Owner" },
  { key: "Agent", label: "Agent" },
  { key: "Broker", label: "Broker" },
];

const agreementMessages: Record<string, string> = {
  Owner:
    "I agree to provide 1 month full commission when renting out and another 1 month for renewal.",
  Agent: "I agree to a 50/50 commission sharing on the transaction.",
  Broker: "I agree to a 60/40 commission sharing on the transaction.",
};

export const status = [
  { key: "For Rent", label: "For Rent" },
  { key: "For Sale", label: "For Sale" },
];

export const parking = [
  { key: "0", label: "With Parking" },
  { key: "1", label: "No Parking" },
];

export const type = [
  { key: "Studio Type", label: "Studio Type" },
  { key: "1BR", label: "1BR" },
  { key: "2BR", label: "2BR" },
  { key: "3BR", label: "3BR" },
  { key: "Loft", label: "Loft" },
  { key: "Penthouse", label: "Penthouse" },
];

export const furnished = [
  { key: "Bare", label: "Bare" },
  { key: "Semi-Furnished", label: "Semi-Furnished" },
  { key: "Fully-Furnished", label: "Fully-Furnished" },
  { key: "Interiored", label: "Interiored" },
];

export const rent = [
  { key: "6 Months", label: "6 Months" },
  { key: "1 Year", label: "1 Year" },
  { key: "2 Year", label: "2 Years" },
];

export const sale = [
  { key: "RFO", label: "RFO" },
  { key: "Pre-Selling", label: "Pre-Selling" },
];

export const payment = [
  { key: "Cash", label: "Cash" },
  { key: "Bank Financing", label: "Bank Financing" },
];

export const amenities = [
  { key: "Pool Area", label: "Pool Area" },
  { key: "Balcony/Terrace", label: "Balcony/Terrace" },
  { key: "Elevator", label: "Elevator" },
  { key: "Guest Suite", label: "Guest Suite" },
  { key: "Club House", label: "Club House" },
  { key: "Concerierge Services", label: "Concerierge Services" },
  { key: "Underground Parking", label: "Underground Parking" },
  { key: "Gym/Fitnes Center", label: "Gym/Fitnes Center" },
  { key: "Security", label: "Security" },
  { key: "Pet-Friendly Facilities", label: "Pet-Friendly Facilities" },
];

const validationSchema = Yup.object({
  // Personal Information
  user_first: Yup.string().required("First name is required"),
  user_last: Yup.string().required("Last name is required"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  user_phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Phone number is required"),
  sender_type: Yup.string().required("Type is required"),

  // Property Information
  property_name: Yup.string().required("Property name is required"),
  property_type: Yup.string().required("Unit Type is required"),
  property_unit_status: Yup.string().required("Unit Status is required"),
  property_location: Yup.string().required("Location is required"),
  property_price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Property price is required"),
  property_area: Yup.number()
    .typeError("Square meter must be a number")
    .positive("Square meter must be positive")
    .required("Square meter is required"),
  property_number: Yup.number()
    .typeError("Floor number must be a number")
    .positive("Floor number must be positive")
    .required("Floor number is required"),
  property_parking: Yup.boolean().required("Parking is required"),
  property_status: Yup.string().required("Property Status is required"),
  property_amenities: Yup.array()
    .of(Yup.string())
    .min(1, "At least one amenity must be selected"),
  // commission: Yup.boolean()
  //   .oneOf([true], "You must agree to the terms.")
  //   .required("Agreement is required."),
});

const SubmitPropertyCard = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedtPayment, setSelectedPayment] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      user_first: "",
      user_last: "",
      user_email: "",
      user_phone: "",
      sender_type: "",

      property_name: "",
      property_type: "",
      property_unit_status: "",
      property_location: "",
      property_price: "",
      property_area: "",
      property_number: "",
      property_parking: "",
      property_status: "",

      property_rent_terms: "",
      property_sale_type: "",
      property_sale_payment: "",
      property_sale_title: "",
      property_sale_turnover: "",
      property_description: "",
      property_amenities: [] as string[],
    },
    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/submit-property`;

        if (!endpoint) {
          throw new Error('API URL is not defined in the environment variables');
        }
        const response = await axios.post(endpoint,
          values,
        );

        toast.success("Inquiry submitted successfully!");
        resetForm();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // The error is an AxiosError
          if (error.response) {
            // The request was made, and the server responded with a status code outside 2xx

            toast.error(
              error.response.data.message ||
              "Failed to submit inquiry. Please try again later.",
            );
          } else if (error.request) {
            // The request was made but no response was received

            toast.error("No response from server. Please try again later.");
          }
        } else {
          // The error is not an AxiosError

          toast.error("Unexpected error occurred. Please try again.");
        }
      }
      finally {
        setLoading(false);
      }
    },
  });

  const handleStatusChange = (value: string): void => {
    setSelectedStatus(value);
  };

  const handlePaymentChange = (value: string): void => {
    // Update the state for the selected payment type
    setSelectedPayment(value);
  };

  return (
    <div className="w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={formik.handleSubmit}>
        <Card className="w-full">
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 md:px-6">
              <div className="col-span-2 py-6">
                <h1 className="text-2xl text-violet-700 font-bold underline">
                  Personal Information
                </h1>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label="First Name"
                  name="user_first"
                  placeholder="eg. Juan"
                  type="text"
                  value={formik.values.user_first}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.user_first && formik.errors.user_first && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.user_first}
                  </p>
                )}
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label="Last Name"
                  name="user_last"
                  placeholder="eg. Dela Cruz"
                  type="text"
                  value={formik.values.user_last}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.user_last && formik.errors.user_last && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.user_last}
                  </p>
                )}
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label="Email"
                  name="user_email"
                  placeholder="eg. juandelacruz@gmail.com"
                  type="email"
                  value={formik.values.user_email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.user_email && formik.errors.user_email && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.user_email}
                  </p>
                )}
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label="Phone Number"
                  name="user_phone"
                  placeholder="eg. 09924401097"
                  type="number"
                  value={formik.values.user_phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.user_phone && formik.errors.user_phone && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.user_phone}
                  </p>
                )}
              </div>
              <div className="col-span-2 md:col-span-1">
                <Select
                  label="Type"
                  name="sender_type"
                  placeholder="Select Type"
                  value={formik.values.sender_type}
                  onChange={(e) =>
                    formik.setFieldValue("sender_type", e.target.value)
                  }
                >
                  {agents.map((agent) => (
                    <SelectItem key={agent.key} value={agent.key}>
                      {agent.label}
                    </SelectItem>
                  ))}
                </Select>
                {formik.touched.sender_type && formik.errors.sender_type && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.sender_type}
                  </p>
                )}
              </div>

              <div className="col-span-2 md:col-span-1">
                {formik.values.sender_type && (
                  <>
                    <div className="col-span-2 md:col-span-1">
                      <p className="text-gray-700 text-sm">
                        {agreementMessages[formik.values.sender_type]}
                      </p>
                    </div>

                    {/* <div className="col-span-2 md:col-span-1 mt-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="commission"
                          checked={formik.values.commission}
                          onChange={(e) =>
                            formik.setFieldValue("commission", e.target.checked)
                          }
                          className="w-4 h-4 border border-gray-300 rounded"
                        />

                        <span className="text-gray-700 text-sm">
                          I agree to the terms above
                        </span>
                      </label>
                      {formik.touched.commission && formik.errors.commission && (
                        <p className="text-red-500 text-sm">{formik.errors.commission}</p>
                      )}
                    </div> */}
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 md:px-6">
              <div className="col-span-3 py-6">
                <h1 className="text-2xl text-violet-700 font-bold underline">
                  Property Information
                </h1>
              </div>
              <div className="col-span-3 md:col-span-1">
                <Input
                  label="Property Name"
                  name="property_name"
                  placeholder="eg. Prisma Residences"
                  type="text"
                  value={formik.values.property_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.property_name &&
                  formik.errors.property_name && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_name}
                    </p>
                  )}
              </div>
              <div className="col-span-3 md:col-span-1">
                <Select
                  label="Unit Type"
                  name="property_type"
                  placeholder="eg. 1 BR"
                  onChange={(e) =>
                    formik.setFieldValue("property_type", e.target.value)
                  }
                >
                  {type.map((type) => (
                    <SelectItem key={type.key}>{type.label}</SelectItem>
                  ))}
                </Select>

                {formik.touched.property_type &&
                  formik.errors.property_type && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_type}
                    </p>
                  )}
              </div>

              <div className="col-span-3 md:col-span-1">
                <Select
                  label="Unit Status"
                  name="property_unit_status"
                  placeholder="Fully Furnished"
                  onChange={(e) =>
                    formik.setFieldValue("property_unit_status", e.target.value)
                  }
                >
                  {furnished.map((furnished) => (
                    <SelectItem key={furnished.key}>
                      {furnished.label}
                    </SelectItem>
                  ))}
                </Select>
                {formik.touched.property_unit_status &&
                  formik.errors.property_unit_status && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_unit_status}
                    </p>
                  )}
              </div>

              <div className="col-span-3">
                <Input
                  label="Location"
                  name="property_location"
                  placeholder="eg. Makati City"
                  type="text"
                  value={formik.values.property_location}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.property_location &&
                  formik.errors.property_location && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_location}
                    </p>
                  )}
              </div>

              <div className="col-span-3 md:col-span-1">
                <Input
                  label="Property Price"
                  name="property_price"
                  placeholder="eg. 0.00"
                  type="text"
                  value={formik.values.property_price}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.property_price &&
                  formik.errors.property_price && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_price}
                    </p>
                  )}
              </div>

              <div className="col-span-3 md:col-span-1">
                <Input
                  label="Square Meter"
                  name="property_area"
                  placeholder="eg. 0.00"
                  type="text"
                  value={formik.values.property_area}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.property_area &&
                  formik.errors.property_area && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_area}
                    </p>
                  )}
              </div>

              <div className="col-span-3 md:col-span-1">
                <Input
                  label="Floor Number"
                  name="property_number"
                  placeholder="eg. 0.00"
                  type="text"
                  value={formik.values.property_number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.property_number &&
                  formik.errors.property_number && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_number}
                    </p>
                  )}
              </div>

              <div className="col-span-3 md:col-span-1">
                <Select
                  label="Parking"
                  name="property_parking"
                  placeholder="Select Parking"
                  onChange={(e) =>
                    formik.setFieldValue("property_parking", e.target.value)
                  }
                >
                  {parking.map((parking) => (
                    <SelectItem key={parking.key}>{parking.label}</SelectItem>
                  ))}
                </Select>
                {formik.touched.property_parking &&
                  formik.errors.property_parking && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_parking}
                    </p>
                  )}
              </div>

              <div className="col-span-3 md:col-span-1">
                <Select
                  label="Property Status"
                  name="property_status"
                  placeholder="Property Status"
                  value={formik.values.property_status}
                  onChange={(e) => {
                    const value = e.target.value;

                    formik.setFieldValue("property_status", value);
                    setSelectedStatus(value);
                  }}
                >
                  {status.map((statusItem) => (
                    <SelectItem key={statusItem.key} value={statusItem.key}>
                      {statusItem.label}
                    </SelectItem>
                  ))}
                </Select>
                {formik.touched.property_status &&
                  formik.errors.property_status && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.property_status}
                    </p>
                  )}
              </div>

              {formik.values.property_status === "For Rent" && (
                <div className="col-span-3 md:col-span-1">
                  <Select
                    label="Minimum Lease Term"
                    name="property_rent_terms"
                    placeholder="Lease Term"
                    value={formik.values.property_rent_terms}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "property_rent_terms",
                        e.target.value,
                      )
                    }
                  >
                    {rent.map((rentItem) => (
                      <SelectItem key={rentItem.key} value={rentItem.key}>
                        {rentItem.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}

              {formik.values.property_status === "For Sale" && (
                <>
                  <div className="col-span-2 md:col-span-1">
                    <Select
                      label="Sale Type"
                      name="property_sale_type"
                      placeholder="Select Sale Type"
                      value={formik.values.property_sale_type}
                      onChange={(e) =>
                        formik.setFieldValue(
                          "property_sale_type",
                          e.target.value,
                        )
                      }
                    >
                      {sale.map((saleItem) => (
                        <SelectItem key={saleItem.key} value={saleItem.key}>
                          {saleItem.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  {formik.values.property_sale_type === "RFO" && (
                    <>
                      <div className="col-span-2 md:col-span-1">
                        <Select
                          label="Payment Type"
                          name="property_sale_payment"
                          placeholder="Select Payment Type"
                          value={formik.values.property_sale_payment}
                          onChange={(e) =>
                            formik.setFieldValue(
                              "property_sale_payment",
                              e.target.value,
                            )
                          }
                        >
                          {payment.map((paymentItem) => (
                            <SelectItem
                              key={paymentItem.key}
                              value={paymentItem.key}
                            >
                              {paymentItem.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>

                      <div className="col-span-2 md:col-span-1">
                        <Input
                          label="Title Status"
                          name="property_sale_title"
                          placeholder="Enter Title Status"
                          type="text"
                          value={formik.values.property_sale_title}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.property_sale_title &&
                          formik.errors.property_sale_title && (
                            <p className="text-red-500 text-sm">
                              {formik.errors.property_sale_title}
                            </p>
                          )}
                      </div>
                    </>
                  )}

                  {formik.values.property_sale_type === "Pre-Selling" && (
                    <div className="col-span-2 md:col-span-1">
                      <Input
                        label="Turnover Date"
                        name="property_sale_turnover"
                        placeholder="Enter Turnover Date"
                        type="date"
                        value={formik.values.property_sale_turnover}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.property_sale_turnover &&
                        formik.errors.property_sale_turnover && (
                          <p className="text-red-500 text-sm">
                            {formik.errors.property_sale_turnover}
                          </p>
                        )}
                    </div>
                  )}
                </>
              )}
            </div>

            <Divider className="my-4" />

            <div className="md:px-6">
              <h1 className="font-bold text-violet-700">
                Features and Amenties
              </h1>

              <div className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {amenities.map((amenitiesItem) => (
                    <div key={amenitiesItem.key} className="flex items-center">
                      <input
                        checked={formik.values.property_amenities.includes(
                          amenitiesItem.key,
                        )}
                        className="w-4 h-4"
                        id={amenitiesItem.key}
                        type="checkbox"
                        value={amenitiesItem.key}
                        onChange={(e) => {
                          // Check if the checkbox is checked or unchecked
                          if (e.target.checked) {
                            // Add the selected amenity to the array
                            formik.setFieldValue("property_amenities", [
                              ...formik.values.property_amenities,
                              amenitiesItem.key,
                            ]);
                          } else {
                            // Remove the unchecked amenity from the array
                            formik.setFieldValue(
                              "property_amenities",
                              formik.values.property_amenities.filter(
                                (key) => key !== amenitiesItem.key,
                              ),
                            );
                          }
                        }}
                      />
                      <label
                        className="ms-2 text-md font-medium text-default-500"
                        htmlFor={amenitiesItem.key}
                      >
                        {amenitiesItem.label}
                      </label>
                    </div>
                  ))}

                  {formik.errors.property_amenities &&
                    formik.touched.property_amenities && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.property_amenities}
                      </div>
                    )}
                </div>
              </div>

              <h1 className="font-bold text-violet-700">Property Image</h1>

              <div className="col-span-3 md:col-span-1 py-8">
                <Input size="lg" type="file" />
              </div>

              <Button
                className="bg-violet-600 text-white font-bold uppercase mb-4"
                endContent={<FaArrowRightLong />}
                size="lg"
                type="submit"
                isLoading={loading}
              >
                {loading ? "Sending Property..." : "Submit Property"}
              </Button>
            </div>
          </CardBody>
        </Card>
      </form>
    </div>
  );
};

export default SubmitPropertyCard;
