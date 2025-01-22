"use client";
import React, { useState } from "react";
import * as Yup from "yup";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Autocomplete,
  AutocompleteItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalContent,
  Input,
} from "@nextui-org/react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

interface Career {
  id: string;
  position: string;
  slots: number;
  image: string;
}

interface CareersProps {
  career: Career[];
}

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10,12}$/, "Phone number must be between 10 and 12 digits")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  resume: Yup.mixed<File>()
    .required("Resume is required")
    .test("fileFormat", "Unsupported format", (value) =>
      value ? ["application/pdf", "application/msword"].includes(value.type) : true
    )
    .test("fileSize", "File too large (max 5MB)", (value) =>
      value ? value.size <= 5 * 1024 * 1024 : true
    ),
});

const CareersCard: React.FC<CareersProps> = ({ career }) => {
  const [selectedPosition, setSelectedPosition] = useState<string>(career[0]?.position || "");
  const [selectedSlots, setSelectedSlots] = useState<number>(0);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(career[0] || null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false); 

  const handlePositionChange = (position: string) => {
    setSelectedPosition(position);
    const selectedCareer = career.find((item) => item.position === position);
    if (selectedCareer) {
      setSelectedSlots(selectedCareer.slots);
    }
  };

  const formik = useFormik({
    initialValues: {
      career_id: selectedCareer?.id || "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      resume: null,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Set loading to true when submit starts
      try {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]: [string, unknown]) => {
          if (value !== null && value !== undefined) {
            if (key === "resume" && value instanceof File) {
              // Append file (resume)
              formData.append(key, value);
            } else if (typeof value === "string") {
              // Append other fields as strings
              formData.append(key, value);
            } else {
              console.warn(`Unexpected value type for key ${key}:`, value);
            }
          }
        });

        await axios.post(
          "https://abicmanpowerservicecorp.com/api/main/submit-application",
          formData
        );
        toast.success("Application submitted successfully!");
        resetForm();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            toast.error(
              error.response.data.message ||
              "Failed to submit your application. Please try again later."
            );
          } else if (error.request) {
            toast.error("No response from server. Please try again later.");
          }
        } else {
          toast.error("Unexpected error occurred. Please try again.");
        }
      } finally {
        setLoading(false); // Reset loading state after submission is done
      }
    },
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-auto max-w-screen-md">
        <Table aria-label="Careers Table">
          <TableHeader>
            <TableColumn>POSITION</TableColumn>
            <TableColumn>SLOTS</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Autocomplete
                  placeholder="Select a Position"
                  value={selectedPosition}
                  onSelectionChange={(key) => {
                    const selectedCareer = career.find((item) => item.id === key);
                    if (selectedCareer) {
                      handlePositionChange(selectedCareer.position);
                    }
                  }}
                >
                  {career.map((item) => (
                    <AutocompleteItem
                      key={item.id}
                      textValue={item.position}
                      value={item.id}
                    >
                      {item.position}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              </TableCell>
              <TableCell>{selectedSlots}</TableCell>
              <TableCell>
                <Button
                  className="bg-violet-700 text-white uppercase"
                  onPress={onOpen}
                >
                  Apply Now
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Apply for {selectedPosition}
                </ModalHeader>
                <form onSubmit={formik.handleSubmit}>
                  <ModalBody>
                    <Input
                      label="First Name"
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
                    <Input
                      label="Last Name"
                      placeholder="eg. Dela Cruz"
                      type="text"
                      name="last_name"
                      value={formik.values.last_name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.last_name && formik.errors.last_name && (
                      <p className="text-red-500 text-sm">{formik.errors.last_name}</p>
                    )}
                    <Input
                      label="Email"
                      placeholder="eg. juan@gmail.com"
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
                      placeholder="eg. 09924401097"
                      type="text"
                      name="phone"
                      value={formik.values.phone}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                    )}
                    <Input
                      label="Address"
                      placeholder="eg. Makati City, Philippines"
                      type="text"
                      name="address"
                      value={formik.values.address}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.address && formik.errors.address && (
                      <p className="text-red-500 text-sm">{formik.errors.address}</p>
                    )}
                    <Input
                      type="file"
                      name="resume"
                      onBlur={formik.handleBlur}
                      onChange={(event) => {
                        const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
                        formik.setFieldValue("resume", file);
                      }}
                    />
                    {formik.touched.resume && formik.errors.resume && (
                      <p className="text-red-500 text-sm">{formik.errors.resume}</p>
                    )}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit" isLoading={loading}>
                      {loading ? "Sending Application..." : "Send Application"}
                    </Button>
                  </ModalFooter>
                </form>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default CareersCard;
