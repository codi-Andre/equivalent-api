-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `foods` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`categoryId` integer NOT NULL,
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE `amino_acids` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`foodId` integer NOT NULL,
	`tryptophan` real NOT NULL,
	`threonine` real NOT NULL,
	`isoleucine` real NOT NULL,
	`leucine` real NOT NULL,
	`lysine` real NOT NULL,
	`methionine` real NOT NULL,
	`cystine` real NOT NULL,
	`phenylalanine` real NOT NULL,
	`tyrosine` real NOT NULL,
	`valine` real NOT NULL,
	`arginine` real NOT NULL,
	`histidine` real NOT NULL,
	`alanine` real NOT NULL,
	`asparticAcid` real NOT NULL,
	`glutamicAcid` real NOT NULL,
	`glycine` real NOT NULL,
	`proline` real NOT NULL,
	`serine` real NOT NULL,
	FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE `fatty_acids` (
	`foodId` integer NOT NULL,
	`saturated` real NOT NULL,
	`monounsaturated` real NOT NULL,
	`polyunsaturated` real NOT NULL,
	`12:0` real,
	`14:0` real,
	`14:1` real,
	`16:0` real,
	`16:1` real,
	`18:0` real,
	`18:1` real,
	`18:1t` real,
	`18:2n6` real,
	`18:2t` real,
	`18:3n3` real,
	`20:0` real,
	`20:1` real,
	`20:4` real,
	`20:5` real,
	`22:0` real,
	`22:5` real,
	`22:6` real,
	`24:0` real,
	FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE `nutrients` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`foodId` integer NOT NULL,
	`moisture` real,
	`kcal` real,
	`kJ` real,
	`protein` real,
	`lipids` real,
	`cholesterol` real,
	`carbohydrates` real,
	`dietaryFiber` real,
	`ash` real,
	`calcium` real,
	`magnesium` real,
	`manganese` real,
	`phosphorus` real,
	`iron` real,
	`sodium` real,
	`potassium` real,
	`copper` real,
	`zinc` real,
	`retinol` real,
	`re` real,
	`rae` real,
	`thiamin` real,
	`riboflavin` real,
	`pyridoxine` real,
	`niacin` real,
	`vitaminC` real,
	FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE `units` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`fieldName` text NOT NULL,
	`unit` text NOT NULL,
	`labelPt` text NOT NULL,
	`infoodsTagname` text,
	`systematicName` text,
	`commonName` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `categories_name_key` ON `categories` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `foods_name_key` ON `foods` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `amino_acids_foodId_key` ON `amino_acids` (`foodId`);--> statement-breakpoint
CREATE UNIQUE INDEX `fatty_acids_foodId_key` ON `fatty_acids` (`foodId`);--> statement-breakpoint
CREATE UNIQUE INDEX `nutrients_foodId_key` ON `nutrients` (`foodId`);
*/