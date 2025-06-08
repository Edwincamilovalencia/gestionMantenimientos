-- CreateTable
CREATE TABLE "TipoMaquina" (
    "idTipoMaquina" SERIAL NOT NULL,
    "descripcionTipoMaquina" TEXT NOT NULL,

    CONSTRAINT "TipoMaquina_pkey" PRIMARY KEY ("idTipoMaquina")
);

-- CreateTable
CREATE TABLE "Maquina" (
    "idMaquina" SERIAL NOT NULL,
    "ubicacionMaquina" TEXT NOT NULL,
    "estadoMaquina" TEXT NOT NULL,
    "descripcionMaquina" TEXT NOT NULL,
    "idTipoMaquina" INTEGER NOT NULL,

    CONSTRAINT "Maquina_pkey" PRIMARY KEY ("idMaquina")
);

-- AddForeignKey
ALTER TABLE "Maquina" ADD CONSTRAINT "Maquina_idTipoMaquina_fkey" FOREIGN KEY ("idTipoMaquina") REFERENCES "TipoMaquina"("idTipoMaquina") ON DELETE RESTRICT ON UPDATE CASCADE;
