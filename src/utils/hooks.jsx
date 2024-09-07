import moment from "moment"
import { CSVLink } from 'react-csv';
import { format } from 'date-fns';

export const dateFormatter = (date) => {
  if (date)
    return moment(new Date(date)).format('DD-MM-yyyy')
  else
    return ''
}

export const ExportCSVButton = ({ csvData, fileName, headers }) => (
  <CSVLink data={csvData} filename={fileName} headers={headers}>
    Export CSV
  </CSVLink>
);

export const containsNonHtmlText = (inputString) => {
  const textWithoutHtml = inputString.replace(/<[^>]+>/g, '');
  return textWithoutHtml.trim() !== '';
}

export const convertBase64 = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })

export const headerFormatter = (column, colIndex, { sortElement, filterElement }) => {
  return (
    <div className='d-flex justify-content-between'>
      {column.text}
      {sortElement}
    </div>
  );
};

export const dateFormatterWithTime = (dateString) => {
  const formattedDate = dateString ? format(new Date(dateString), 'dd-MM-yyyy hh:mm a') : "";
  return formattedDate;
};

export const defaultMessageObj = {
  type: "info",
  messageText: "",
  duration: 3000,
  position: "top-right",
} 