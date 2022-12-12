import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from "@mui/material";
import { sub } from "date-fns";
import React, { useRef, useState } from "react";
import { Iconify, MenuPopover, Scrollbar } from "~/components";
import { fToNow } from "~/utils/formats";

interface NotificationContent {
  createdAt: Date;
  id: string;
  isUnRead: boolean;
  title: string;
  description: string;
  avatar: any;
}

interface NotificationItemProps {
  notification: NotificationContent;
}

const NOTIFICATIONS = [
  {
    id: "5e8f3f1b9d4b1b2b4b9b5b6c",
    title: "Đơn hàng đang được xử lý",
    description: "Đơn hàng của bạn đang được chuyển đi",
    avatar: "https://picsum.photos/200",
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: true,
  },
];

const NotificationItem = ({ notification }: NotificationItemProps) => (
  <ListItemButton
    sx={{
      py: 0,
      px: 2.5,
      borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
      ...(notification.isUnRead && {
        bgcolor: "action.selected",
      }),
    }}
  >
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: "background.neutral" }} src={notification.avatar} />
    </ListItemAvatar>
    <ListItemText
      primary={
        <Typography variant="subtitle2">
          {notification.title}
          <Typography component="span" variant="body2" sx={{ color: "text.secondary" }}>
            &nbsp; {notification.description}
          </Typography>
        </Typography>
      }
      secondary={
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: "flex",
            alignItems: "center",
            color: "text.disabled",
          }}
        >
          <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
          {fToNow(notification.createdAt)}
        </Typography>
      }
    />
  </ListItemButton>
);

function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;
  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      })),
    );
  };

  return (
    <React.Fragment>
      <IconButton
        ref={anchorRef}
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="eva:bell-fill" width={20} height={20} />
        </Badge>
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 425, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Thông báo</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Bạn có {totalUnRead} thông báo chưa đọc
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title="Đánh dấu đã đọc">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" width={20} height={20} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Scrollbar sx={{ maxHeight: 360 }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: "overline" }}>
                Thông báo mới
              </ListSubheader>
            }
          >
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: "overline" }}>
                Thông báo trước đó
              </ListSubheader>
            }
          >
            {notifications.slice(2, 5).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            Xem tất cả
          </Button>
        </Box>
      </MenuPopover>
    </React.Fragment>
  );
}

export default NotificationsPopover;
