import dayjs from 'dayjs';

export const formatTableDateTime = (dateTime: number) =>
  dayjs(dateTime).format('MMM D, H:mma');

export const formatPublishDate = (dateTime: number) =>
  dayjs(dateTime).format('MMMM D');
