/*
  Warnings:

  - A unique constraint covering the columns `[descripcion]` on the table `TipoUsuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TipoUsuario_descripcion_key" ON "TipoUsuario"("descripcion");
