import { convocatoryRepository } from '../../infrastructure/repositories/Convocatory.repository';
import { Convocatory } from '../models/Convocatory';

const registerConvocatory = (convocatory: Convocatory, file: string) => {
  const response = convocatoryRepository.createConvocatory(convocatory, file);
};

const submitForRevision = (convocatory: Convocatory, revisionReason: string | null) => {
  if (convocatory.id) {
    const response = convocatoryRepository.submitForRevision(
      convocatory.id,
      revisionReason,
    );
  }
};

export const ConvocatoryService = { registerConvocatory, submitForRevision };
