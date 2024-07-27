CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `foods` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_id` integer NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE `nutrients` (
	`food_id` integer,
	`moisture` real NOT NULL,
	`kcal` real NOT NULL,
	`kJ` real NOT NULL,
	`protein` real NOT NULL,
	`lipids` real NOT NULL,
	`cholesterol` real NOT NULL,
	`carbohydrates` real NOT NULL,
	`dietaryFiber` real NOT NULL,
	`ash` real NOT NULL,
	`calcium` real NOT NULL,
	`magnesium` real NOT NULL,
	`manganese` real NOT NULL,
	`phosphorus` real NOT NULL,
	`iron` real NOT NULL,
	`sodium` real NOT NULL,
	`potassium` real NOT NULL,
	`copper` real NOT NULL,
	`zinc` real NOT NULL,
	`retinol` real NOT NULL,
	`re` real NOT NULL,
	`rae` real NOT NULL,
	`thiamin` real NOT NULL,
	`riboflavin` real NOT NULL,
	`pyridoxine` real NOT NULL,
	`niacin` real NOT NULL,
	`vitaminC` real NOT NULL,
	FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE UNIQUE INDEX `categories_name_unique` ON `categories` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `foods_name_unique` ON `foods` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `nutrients_food_id_unique` ON `nutrients` (`food_id`);