/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace SharedStructs {
  export type PlanetStruct = {
    planetID: BigNumberish;
    worldMapIndex: BigNumberish;
    xCoord: BigNumberish;
    yCoord: BigNumberish;
    planetType: BigNumberish;
    balance: BigNumberish;
  };

  export type PlanetStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    planetID: BigNumber;
    worldMapIndex: BigNumber;
    xCoord: BigNumber;
    yCoord: BigNumber;
    planetType: BigNumber;
    balance: BigNumber;
  };
}

export declare namespace WorldMapCreator {
  export type WorldMapStruct = {
    worldIndex: BigNumberish;
    Length: BigNumberish;
    Breadth: BigNumberish;
  };

  export type WorldMapStructOutput = [BigNumber, BigNumber, BigNumber] & {
    worldIndex: BigNumber;
    Length: BigNumber;
    Breadth: BigNumber;
  };
}

export interface WorldMapCreatorInterface extends utils.Interface {
  functions: {
    "defineWorldMap(uint256,uint256,uint256)": FunctionFragment;
    "deleteWorld(uint256)": FunctionFragment;
    "existingWorlds(uint256)": FunctionFragment;
    "getLocation(uint256,uint256)": FunctionFragment;
    "getPlanets(uint256)": FunctionFragment;
    "getWorldMap(uint256)": FunctionFragment;
    "manualCreatePlanet(uint256,uint256,uint256,uint256)": FunctionFragment;
    "planetIndex()": FunctionFragment;
    "planetsInWorld(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "defineWorldMap"
      | "deleteWorld"
      | "existingWorlds"
      | "getLocation"
      | "getPlanets"
      | "getWorldMap"
      | "manualCreatePlanet"
      | "planetIndex"
      | "planetsInWorld"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "defineWorldMap",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteWorld",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "existingWorlds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLocation",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlanets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWorldMap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "manualCreatePlanet",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "planetIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "planetsInWorld",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "defineWorldMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteWorld",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "existingWorlds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPlanets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWorldMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "manualCreatePlanet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "planetIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "planetsInWorld",
    data: BytesLike
  ): Result;

  events: {};
}

export interface WorldMapCreator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WorldMapCreatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    defineWorldMap(
      _worldIndex: BigNumberish,
      _length: BigNumberish,
      _breadth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteWorld(
      _selectedWorldIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    existingWorlds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        worldIndex: BigNumber;
        Length: BigNumber;
        Breadth: BigNumber;
      }
    >;

    getLocation(
      _worldId: BigNumberish,
      _planetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    getPlanets(
      _worldId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[SharedStructs.PlanetStructOutput[]]>;

    getWorldMap(
      _selectedWorldIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[WorldMapCreator.WorldMapStructOutput]>;

    manualCreatePlanet(
      _worldMapIndex: BigNumberish,
      _xCoord: BigNumberish,
      _yCoord: BigNumberish,
      _planetType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    planetIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    planetsInWorld(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  defineWorldMap(
    _worldIndex: BigNumberish,
    _length: BigNumberish,
    _breadth: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteWorld(
    _selectedWorldIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  existingWorlds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      worldIndex: BigNumber;
      Length: BigNumber;
      Breadth: BigNumber;
    }
  >;

  getLocation(
    _worldId: BigNumberish,
    _planetId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

  getPlanets(
    _worldId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<SharedStructs.PlanetStructOutput[]>;

  getWorldMap(
    _selectedWorldIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<WorldMapCreator.WorldMapStructOutput>;

  manualCreatePlanet(
    _worldMapIndex: BigNumberish,
    _xCoord: BigNumberish,
    _yCoord: BigNumberish,
    _planetType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  planetIndex(overrides?: CallOverrides): Promise<BigNumber>;

  planetsInWorld(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    defineWorldMap(
      _worldIndex: BigNumberish,
      _length: BigNumberish,
      _breadth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteWorld(
      _selectedWorldIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    existingWorlds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        worldIndex: BigNumber;
        Length: BigNumber;
        Breadth: BigNumber;
      }
    >;

    getLocation(
      _worldId: BigNumberish,
      _planetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    getPlanets(
      _worldId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<SharedStructs.PlanetStructOutput[]>;

    getWorldMap(
      _selectedWorldIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<WorldMapCreator.WorldMapStructOutput>;

    manualCreatePlanet(
      _worldMapIndex: BigNumberish,
      _xCoord: BigNumberish,
      _yCoord: BigNumberish,
      _planetType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    planetIndex(overrides?: CallOverrides): Promise<BigNumber>;

    planetsInWorld(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    defineWorldMap(
      _worldIndex: BigNumberish,
      _length: BigNumberish,
      _breadth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteWorld(
      _selectedWorldIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    existingWorlds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLocation(
      _worldId: BigNumberish,
      _planetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlanets(
      _worldId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWorldMap(
      _selectedWorldIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    manualCreatePlanet(
      _worldMapIndex: BigNumberish,
      _xCoord: BigNumberish,
      _yCoord: BigNumberish,
      _planetType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    planetIndex(overrides?: CallOverrides): Promise<BigNumber>;

    planetsInWorld(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    defineWorldMap(
      _worldIndex: BigNumberish,
      _length: BigNumberish,
      _breadth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteWorld(
      _selectedWorldIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    existingWorlds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLocation(
      _worldId: BigNumberish,
      _planetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlanets(
      _worldId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWorldMap(
      _selectedWorldIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    manualCreatePlanet(
      _worldMapIndex: BigNumberish,
      _xCoord: BigNumberish,
      _yCoord: BigNumberish,
      _planetType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    planetIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    planetsInWorld(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}