import axiosInstance from '@/lib/axios';

export interface EnquiryPayload {
  enquiryFullName: string;
  enquiryMobile: string;
  enquiryEmail: string;
  enquiryProduct: string;
  enquiryMessage: string;
  utm_medium: string;
  utm_source: string;
  utm_campaign: string;
}

export const submitEnquiry = async (payload: EnquiryPayload) => {
  const response = await axiosInstance.post('/createEnquiry', payload);
  return response.data;
};
