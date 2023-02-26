import bcrypt from 'bcrypt';
import { Configurations } from '../common/constants';
import { v5 } from 'uuid';
import zxcvbn from 'zxcvbn-typescript';

export class UtilsProvider {
  /**
   * convert entity to dto class instance
   * @param {{new(entity: E, options: any): T}} model
   * @param {E[] | E} entity
   * @param options
   * @returns {T[] | T}
   */
  public static toDto<T, E>(
    model: new (entity: E, options?: GetConstructorArgs<T>[1]) => T,
    entity: E,
    options?: GetConstructorArgs<T>[1],
  ): T;
  public static toDto<T, E>(
    model: new (entity: E, options?: GetConstructorArgs<T>[1]) => T,
    entity: E[],
    options?: GetConstructorArgs<T>[1],
  ): T[];
  public static toDto<T, E>(
    model: new (entity: E, options?: GetConstructorArgs<T>[1]) => T,
    entity: E | E[],
    options?: GetConstructorArgs<T>[1],
  ): T | T[] {
    if (Array.isArray(entity)) {
      return entity.map((u) => new model(u, options));
    }

    return new model(entity, options);
  }

  static generateHash(password: string): string {
    const hashText = bcrypt.hashSync(password, Configurations.SALT_ROUNDS);
    return hashText;
  }

  static validateHash(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
      return Promise.resolve(false);
    }
    return bcrypt.compare(password, hash);
  }

  static generateRandomString(length: number): string {
    return Math.random()
      .toString(36)
      .replace(/[^\dA-Za-z]+/g, '')
      .slice(0, Math.max(0, length));
  }

  static validateLevelPassword(password: string): boolean {
    const result = zxcvbn(password);
    if (result.score >= Configurations.SCORE_PASSWORD) {
      return true;
    }
    return false;
  }

  static textToUuid(
    text: string,
    namespace = '97ba5c6e-9deb-4ce5-9d57-7eaa6765325e',
  ): string {
    return v5(text, namespace);
  }
}
