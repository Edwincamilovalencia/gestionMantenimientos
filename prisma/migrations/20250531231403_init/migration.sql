-- CreateTable
CREATE TABLE "TipoUsuario" (
    "idTipoUsuario" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "TipoUsuario_pkey" PRIMARY KEY ("idTipoUsuario")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipoUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_tipoUsuarioId_fkey" FOREIGN KEY ("tipoUsuarioId") REFERENCES "TipoUsuario"("idTipoUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;
