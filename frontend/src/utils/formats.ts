import { format, formatDistanceToNow } from "date-fns";

export function fDate(date: Date) {
  return format(new Date(date), "dd MMMM yyyy");
}

export function fDateTime(date: Date) {
  return format(new Date(date), "dd MMM yyyy HH:mm");
}

export function fDateTimeSuffix(date: Date) {
  return format(new Date(date), "dd/MM/yyyy hh:mm p");
}

export function fToNow(date: Date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function currencyFormat(value: number) {
  return value.toFixed(0).replace(/./g, function (c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
}
