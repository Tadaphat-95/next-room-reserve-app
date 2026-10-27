CREATE TABLE `Room` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomCode` VARCHAR(50) NOT NULL,
  `roomName` VARCHAR(150) NOT NULL,
  `capacity` INTEGER NOT NULL,
  `location` VARCHAR(200) NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  UNIQUE INDEX `Room_roomCode_key`(`roomCode`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Booking` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `bookerName` VARCHAR(150) NOT NULL,
  `purpose` TEXT NOT NULL,
  `startTime` DATETIME(3) NOT NULL,
  `endTime` DATETIME(3) NOT NULL,
  `attendeeCount` INTEGER NOT NULL,
  `roomId` INTEGER NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  INDEX `Booking_roomId_startTime_endTime_idx`(`roomId`, `startTime`, `endTime`),
  INDEX `Booking_startTime_idx`(`startTime`),
  PRIMARY KEY (`id`),
  CONSTRAINT `Booking_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
