FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["src/GCommerce.DbMigrator/GCommerce.DbMigrator.csproj", "src/GCommerce.DbMigrator/"]
RUN dotnet restore "src/GCommerce.DbMigrator/GCommerce.DbMigrator.csproj"
COPY . .
WORKDIR "/src/src/GCommerce.DbMigrator"
RUN dotnet build "GCommerce.DbMigrator.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "GCommerce.DbMigrator.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GCommerce.DbMigrator.dll"]
